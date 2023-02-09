//ifelse

const joao = 20;
const alex = 16;
const show = "aberto";

switch (show) {
    case "aberto":
        if (joao > 18 && joao < 30) {
            console.log("Joao Pode ir no show");
        } else {
            console.log("Joao Não pode ir no show");
        }
        if (alex > 18 && alex < 30) {
            console.log("Alex Pode ir no show");
        } else {
            console.log("Alex Não pode ir no show");
        }
        break;
    default:
        console.log("Show ainda não esta aberto")
        break;
}