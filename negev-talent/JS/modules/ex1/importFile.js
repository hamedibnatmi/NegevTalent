import stringFormater from "./stringFormater.js";

const formatter = stringFormater()

formatter.capitalizeFirst("dorothy") //should return Dorothy
formatter.toSkewerCase("blue box") //should return blue-box
