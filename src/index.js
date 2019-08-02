import api from "./api";
import changelly from "./changelly";
import bity from "./bity";
import kyber from "./kyber";
import { processNFT, processNFTImage } from "./nft";

import { cloudWatchLogger } from "./loggers";

api.post("/changelly", request => {
  const cloudwatch = new cloudWatchLogger("CHANGELLY");
  return changelly(request, cloudwatch);
});

api.post("/bity", request => {
  const cloudwatch = new cloudWatchLogger("BITY");
  return bity(request, cloudwatch);
});

api.post("/kyber", request => {
  const cloudwatch = new cloudWatchLogger("KYBER");
  return kyber(request, cloudwatch);
});

api.get("/nft", request => {
  const cloudwatch = new cloudWatchLogger("NFT");
  return processNFT(request, cloudwatch);
});
api.setBinaryMediaTypes(["*/*"]);
api.get(
  "/nft/image",
  request => {
    const cloudwatch = new cloudWatchLogger("NFT");
    return processNFTImage(request, cloudwatch);
  },
  {
    success: { contentType: "image/png", contentHandling: "CONVERT_TO_BINARY" }
  }
);

api.get("/", () => "MyEtherWallet Partners API");

module.exports = api;
