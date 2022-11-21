// Function to get the values for the graph 

function model(specialty, number_surgeries) {
    if (specialty == 'UROLOGY') {
        cancelamentos_cirur = number_surgeries * 0.149;
        cancelamentos_modelo = 0;
        estimacao_cirur = number_surgeries * 0.2640;
        estimacao_modelo = number_surgeries * 0.402;
        return [cancelamentos_cirur, cancelamentos_modelo, estimacao_cirur, estimacao_modelo];
    }

    else if (specialty == 'GENERAL_SURGERY') {
        cancelamentos_cirur = number_surgeries * 0.2920;
        cancelamentos_modelo = 0;
        estimacao_cirur = number_surgeries * 0.135;
        estimacao_modelo = number_surgeries * 0.3210;
        return [cancelamentos_cirur, cancelamentos_modelo, estimacao_cirur, estimacao_modelo];
    }

    else {

        cancelamentos_cirur = number_surgeries * 0.2720;
        cancelamentos_modelo = number_surgeries * 0.0062;
        estimacao_cirur = number_surgeries * 0.1710;
        estimacao_modelo = number_surgeries * 0.3540;
        return [cancelamentos_cirur, cancelamentos_modelo, estimacao_cirur, estimacao_modelo];
    }
}




function getSpecialtyValues() {
    //Get The Values from the input user
    var specialty = document.getElementById("specialty").value;
    var surgeries = document.getElementById("numbers").value;

    //Based on input user define the graph values
    cirur_cancelada = model(specialty, surgeries)[0];
    modelo_cancelada = model(specialty, surgeries)[1];
    cirur_estimado = model(specialty, surgeries)[2];
    modelo_estimado = model(specialty, surgeries)[3];

    //window.onload = function () {
    if (surgeries > 0 && surgeries.length > 0) {
        //Graphic
        //colorSet Array


        var chart = new CanvasJS.Chart("chartContainer", {
            animationEnabled: true,

            title: {
                text: "Operating Room Simulator",
                margin: 30,
            },

            axisY2: {
                //interlacedColor: "rgba(1,77,101,.2)",
                //gridColor: "rgba(1,77,101,.1)",
                title: "Number of Surgeries"
            },

            data: [{
                type: "bar",
                name: "surgeries",
                axisYType: "secondary",
                dataPoints: [
                    { y: modelo_estimado, label: "Correct Predictions", color: "rgb(42,109,148)", labelFontColor: "red" },
                    { y: modelo_cancelada, label: "Cancelled Surgeries", color: "rgb(42,109,148)" },
                    { y: '', label: "SOT Model", labelFontWeight: "bold" },
                    { y: cirur_estimado, label: "Correct Predictions", color: "#00BFFF" },
                    { y: cirur_cancelada, label: "Cancelled Surgeries", color: "#00BFFF" },
                    { y: "", label: "Surgeon Estimation" },
                ],

            }]
        });
        chart.render();

    }
}
