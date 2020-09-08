/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import {UserContextProvider} from "./src/context/UserContext";
import React from "react";

require('vazir-font/dist/font-face.css');

export const wrapRootElement = ({element}) => (
  <UserContextProvider>{element}</UserContextProvider>
)
