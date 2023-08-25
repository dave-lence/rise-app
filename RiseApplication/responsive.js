import { Dimensions, useWindowDimensions } from "react-native";
export const windowWidth = Dimensions.get("window").width;
export const windowHeight = Dimensions.get("window").height;
// const { height, width } = useWindowDimensions();

export const ww = (a) => (windowWidth * a) / 428;
export const wp = (a) => (a / 428) * 100;
export const hp = (a) => (a / 1024) * 100;

// export const halfHeight = useWindowDimensions().height / 2;

/*
import {ww, hh, wp} from '../../../responsive';
styled component:
${wp()}%;
${hh()}px;
${ww()}px;
regular styling:
wp()
hh()
ww()
*/
