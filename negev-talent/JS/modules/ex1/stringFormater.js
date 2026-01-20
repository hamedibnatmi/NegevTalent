export default function stringFormater() {

    return {
        capitalizeFirst: (str) => {
            console.log(str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
        },
        toSkewerCase(str) {
            console.log(str.replace(/ /g, "-"));
        }
    }
}
