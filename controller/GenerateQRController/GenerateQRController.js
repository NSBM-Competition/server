const QRCode = require('qrcode');

const GenerateQRController = async (req, res) => {
        try {
                console.log(req.body);

                // console.log(await QRCode.toDataURL(req.body.data))

                QRCode.toDataURL(req.body.data)
                        .then(url => {
                             console.log(url)
                             res.send({
                                    success: true,
                                    message: "QR Code Generated",
                                    url: url
                             })
                        })
                        .catch(err => {
                                console.error(err)
                        })

        } catch (error) {
                res.status(400).send({
                        success: false,
                        message: "Error occur inside the GenerateQRController",

                })
        }
}


module.exports = { GenerateQRController }