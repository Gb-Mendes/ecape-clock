const ponteiroHora = document.querySelector('.hora');
const ponteiroMinuto = document.querySelector('.minutos');
const ponteiroSeugundo = document.querySelector('.segundos');


const getTime = () => {
    const date = new Date();
    return {
        horas: date.getHours(),
        minutos: date.getMinutes(),
        seconds: date.getSeconds(),
    };
}

setInterval(() => {
    const { seconds, minutos, horas } = getTime();

    // ponteiroSeugundo.style.transform = `translate(0, -50%) rotate(${seconds * 6}deg)`
    ponteiroMinuto.style.transform = `translate(0, -50%) rotate(${minutos * 6}deg)`
    ponteiroHora.style.transform = `translate(0, -50%) rotate(${horas * 30}deg)`

}, 1000);

// CODIGO NO RELOGIO.......................................................................................




var codeDica = [".", "-", "-", ".", " ", ".", " ", "-", ".", ".", " ", ".", "-", ".", " ", "-", "-", "-", " ", "FIM"];

var rotation = 0;
setInterval(() => {

    for (let val = 0; val < codeDica.length; val++) {

        // valor = codeDica[val];
        // console.log(codeDica[val])

        if (codeDica[val] == ".") {
            // console.log("PONTO")
            rotation += 30;
            codeDica.splice(0, 1);
            break

        } else if (codeDica[val] == "-") {
            // console.log("TRAÇO")
            rotation += 60;
            codeDica.splice(0, 1);
            break
        } else if (codeDica[val] == " ") {
            // console.log("ESPAÇO")
            rotation = rotation;
            codeDica.splice(0, 1);
            break
        } else if (codeDica[val] == "FIM") {
            // console.log("FIM")
            rotation = 0;
            codeDica = [".", "-", "-", ".", " ", ".", " ", "-", ".", ".", " ", ".", "-", ".", " ", "-", "-", "-", " ", "FIM"];
            break
        }

    }
    // console.log(rotation);
    ponteiroSeugundo.style.transform = `translate(0, -50%) rotate(${rotation}deg)`;
}, 3000);

// CODIGO MORSE:


// function removCaracter(string) {
//     return string.replace(/[,]/g, "");
// }


$("document").ready(function () {

    var palavra = [];
    var codMorse = [];

    $("#inp-codetext").on("change", function () {
        var cod = $("#inp-codetext").val();

        $.post('cod.php', { code: cod }, function (resposta) {

            palavra.push(resposta);
            codMorse.push(cod);
            $("#textres").text(String(palavra).replace(/[,]/g, ""));
            $("#codres").text(String(codMorse).replace(/[,]/g, " "))


            if ($("#textres").text() == "PEDRO") {
                $("#textres").addClass('nice');
                $("#inp-codetext").prop('disabled', true);
                $("#btn-excluir").prop('disabled', true);
            }
        });

        $("#inp-codetext").val("");

    });

    $("#btn-excluir").click(function () {
        console.log("RESET")
        palavra = [];
        codMorse = [];
        $("#textres").text("");
        $("#codres").text("")

    });



})
