var nodemailer = require("nodemailer");

var smtpTransport = nodemailer.createTransport("SMTP",{
    service: "Gmail",
    auth: {
        user: "wbrunom@gmail.com",
        pass: "quimica17"
    }
});

var mailOptions = {
    from: "No-Reply <wbrunom@gmail.com>", // sender address
    to: "strudelfolhadinho@gmail.com", // list of receivers
    subject: "Pedido | Strudel Folhadinho" // Subject line
}

exports.send = function(req, res) {
    var dados = req.body;

    if (dados.sobrenome === '') {
        
        mailOptions.text = dados.nome + ", cep: " + dados.cep + ", telefone: " + dados.telefone;
        mailOptions.html = "Olá, <br /><br />" + 
            "<b>" + dados.nome + "</b> fez um pedido:<br /><br />" + 
            "<b>Telefone:</b> " + dados.telefone + "<br />" +
            "<b>CEP:</b> " + dados.cep + ", " +
            "" + dados.numero + "<br />" +
            "<b>Email:</b> " + dados.email + "<br />" +
            "<b>Detalhes:</b> " + dados.detalhes + "<br />" + 
            "<b>Sabores: </b>" + dados.sabor.join(", ") + "<br /><br />" + 
            "Att, <br />@Folhadinho";

        smtpTransport.sendMail(mailOptions, function(error, response){
            if(error){
                console.log(error);
            }else{
                console.log("Message sent: " + response.message);
            }
        });

        res.send({status: "ok"});
    } else {
        res.send({status: "spam"});
    }
};
