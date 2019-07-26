import api from "./api";
import changelly from "./changelly";
import bity from "./bity";
import kyber from './kyber'
import totle from './totle'
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

api.post("/totle", request => {
  const cloudwatch = new cloudWatchLogger("TOTLE");
  return totle(request, cloudwatch);
});

api.get("/", () => "MyEtherWallet Partners API");

module.exports = api;
