import { imageUrl } from "./constants";
import httpClient from "@/services/httpClient";
import { server } from "@/services/constants";

  export const registerApp = data => {
    return httpClient.post(server.PRODUCT_URL, data);
  };
  
