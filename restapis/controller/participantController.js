const Participant = require('../model/participant')
const QRCode = require('qrcode');

exports.register = async (req,res) => {
    try {
        const { name, email, password, phone, linkedin, instagram } = req.body;

        if (!name || !email || !phone || !password) {
            return res.status(400).json({ msg: 'Name Email and Phone are mandatory' });
        }

        const existingParticipant = await Participant.findOne({ email });
        if (existingParticipant) {
            return res.status(400).json({ msg: 'Participant already exists' });
        }
        
        const newParticipant = new Participant({
            name,
            email,
            password,
            phone,
            linkedin,
            instagram,
        });

        await newParticipant.save();

        res.status(201).json({ msg: 'User registered successfully', newParticipant });
    } catch (error) {
        console.error(error.message);
        res.status(403).send("Server error");
    }
}

exports.getuser = async (req, res) => {
    try {
        const { email, password } = req.body;
    
        if (!email || !password) {
          return res.status(400).json({ msg: 'Email and password are required' });
        }
    
        const user = await Participant.findOne({ email });
    
        if (!user) {
          return res.status(404).json({ msg: 'User not found' });
        }
        
        let isMatch = user.password === password;

        if (!isMatch) {
          return res.status(401).json({ msg: 'Invalid credentials' });
        }
    
        res.status(200).json({
          msg: 'User authenticated successfully',
          user: {
            name: user.name,
            email: user.email,
            password: user.password,
            phone: user.phone,
            linkedin: user.linkedin,
            instagram: user.instagram,
          },
        });
      } catch (err) {
        console.error(err.message);
        res.status(404).send("User not found error");
    }
}

exports.generateQRCode = async (req, res) => {
    try {
      const { email, phone, linkedin, instagram } = req.body;
        console.log(req.body);
        
      if (!email || !phone || !linkedin || !instagram) {
        return res.status(400).json({ msg: 'All fields are required' });
      }
  
      const data = JSON.stringify({ email, phone, linkedin, instagram });
  
      const qrCodeDataURL = await QRCode.toDataURL(data);
  
      res.status(200).json({ qrCode: qrCodeDataURL });
    } catch (error) {
      console.error('Error generating QR code:', error.message);
      res.status(500).send('Server error');
    }
  };