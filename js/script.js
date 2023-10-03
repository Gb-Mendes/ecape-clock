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


// CONFIGURAÇÃO DO RELOGIO............................................................
$("document").ready(function () {
    const codeEdite = [];
    var codeDica = [];

    var resultadoCorreto;
    var valletra;
    $("#inp-respCorret").val(resultadoCorreto);
    function morseCode(cod) {
        if (cod == ".-") {
            valletra = "A";
        } else if (cod == "-...") {
            valletra = "B";

        } else if (cod == "-.-.") {
            valletra = "C";

        } else if (cod == "-..") {
            valletra = "D";

        } else if (cod == ".") {
            valletra = "E";

        } else if (cod == "..-.") {
            valletra = "F";

        } else if (cod == "--.") {
            valletra = "G";

        } else if (cod == "....") {
            valletra = "H";

        } else if (cod == "..") {
            valletra = "I";

        } else if (cod == ".---") {
            valletra = "J";

        } else if (cod == "-.-") {
            valletra = "K";

        } else if (cod == ".-..") {
            valletra = "L";

        } else if (cod == "--") {
            valletra = "M";

        } else if (cod == "-.") {
            valletra = "N";

        } else if (cod == "---") {
            valletra = "O";

        } else if (cod == ".--.") {
            valletra = "P";

        } else if (cod == "--.-") {
            valletra = "Q";

        } else if (cod == ".-.") {
            valletra = "R";

        } else if (cod == "...") {
            valletra = "S";

        } else if (cod == "-") {
            valletra = "T";

        } else if (cod == "..-") {
            valletra = "U";

        } else if (cod == "...-") {
            valletra = "V";

        } else if (cod == ".--") {
            valletra = "W";

        } else if (cod == "-..-") {
            valletra = "X";

        } else if (cod == "-.--") {
            valletra = "Y";

        } else if (cod == "--..") {
            valletra = "Z";

        } else if (cod == ".----") {
            valletra = "1";

        } else if (cod == "..---") {
            valletra = "2";

        } else if (cod == "...--") {
            valletra = "3";

        } else if (cod == "....-") {
            valletra = "4";

        } else if (cod == ".....") {
            valletra = "5";

        } else if (cod == "-....") {
            valletra = "6";

        } else if (cod == "--...") {
            valletra = "7";

        } else if (cod == "---..") {
            valletra = "8";

        } else if (cod == "----.") {
            valletra = "9";

        } else if (cod == "-----") {
            valletra = "0";

        } else if (cod == " ") {
            valletra = " ";
        }
    }

    $("#dv-config").hide();
    $("#senhaConfig").hide();
    $("#senhaIncorreta").hide();

    $("#config").click(function () {
        $("#senhaConfig").slideToggle();
    });


    $("#confimarSenha").click(function () {
        var verificarSenha = $("#inp-senhaConfig").val();

        if (verificarSenha == "Acacia2023") {
            $("#senhaConfig").hide();
            $("#dv-config").slideToggle();
            $("config").prop('disabled', true);
            $("#inp-senhaConfig").val("")
            $("#senhaIncorreta").hide();

        } else {
            $("#senhaIncorreta").show();
        }

    })

    $("#sair-config").click(function () {
        $("#dv-config").slideToggle();
        $("#config").prop('disabled', false);
        codeDica = [] = codeEdite.slice();
        rotation = 0;
        ponteiroSeugundo.style.transform = `translate(0, -50%) rotate(${rotation}deg)`
    });

    var valorNewcode;
    function visualCodeEdit() {
        $("#h1-new-valor").text(String(codeEdite).replace(/[,]/g, ""));
    }

    $("#btn-newPonto").click(function () {
        valorNewcode = $(this).val();
        codeEdite.push(valorNewcode);
        visualCodeEdit();
    });

    $("#btn-newTraco").click(function () {
        valorNewcode = $(this).val();
        codeEdite.push(valorNewcode);
        visualCodeEdit();
    });

    $("#btn-newEspaco").click(function () {
        valorNewcode = $(this).val();
        codeEdite.push(valorNewcode);
        visualCodeEdit();
    });


    $("#btn-newDel").click(function () {
        codeEdite.splice(-1, 1)
        visualCodeEdit();
    });

    $("#btn-newEnd").click(function () {
        valorNewcode = $(this).val();
        codeEdite.push(valorNewcode);
        visualCodeEdit();
    });

    $("#inp-respCorret").on("change", function () {
        resultadoCorreto = $(this).val();
    });


    // CODIGO NO RELOGIO.......................................................................................

    var rotation = 0;
    setInterval(() => {

        for (let val = 0; val < codeDica.length; val++) {

            if (codeDica[val] == ".") {
                rotation += 30;
                codeDica.splice(0, 1);
                break

            } else if (codeDica[val] == "-") {
                rotation += 60;
                codeDica.splice(0, 1);
                break
            } else if (codeDica[val] == " ") {
                rotation = rotation;
                codeDica.splice(0, 1);
                break
            } else if (codeDica[val] == "*") {
                rotation = 0;
                codeDica = [] = codeEdite.slice();
                break
            }

        }

        ponteiroSeugundo.style.transform = `translate(0, -50%) rotate(${rotation}deg)`;
    }, 3000);


    // CODIGO MORSE.......................................................................

    var palavra = [];
    var codMorse = [];

    $("#inp-codetext").on("change", function () {
        var cod = $("#inp-codetext").val();
        morseCode(cod);
        palavra.push(valletra);
        codMorse.push(cod);
        $("#textres").text(String(palavra).replace(/[,]/g, ""));
        $("#codres").text(String(codMorse).replace(/[,]/g, " ").replace(/[e]/g, " "))


        if ($("#textres").text() == resultadoCorreto.toUpperCase()) {
            $("#textres").addClass('nice');
            $("#inp-codetext").prop('disabled', true);
            $("#btn-excluir").prop('disabled', true);
            console.log("chegou: " + resultadoCorreto);
        }
     
        $("#inp-codetext").val("");

    });

    $("#btn-excluir").click(function () {
        palavra = [];
        codMorse = [];
        $("#textres").text("");
        $("#codres").text("")
    });

})
