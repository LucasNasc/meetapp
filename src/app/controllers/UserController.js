import * as Yup from 'yup';
import User from '../models/User';

class UserController {
  // eslint-disable-next-line class-methods-use-this
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required().min(6),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'validations fails' });
    }


    const userExists = await User.findOne({ where: { email: req.body.email } });

    if (userExists) {
      return res.status(400).json({ error: 'User Already Exists' });
    }

    // eslint-disable-next-line object-curly-newline
    const { id, name, email, provider } = await User.create(req.body);

    return res.json({
      id,
      name,
      email,
      provider,
    });
  }

  // eslint-disable-next-line class-methods-use-this
  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      oldPassword: Yup.string().min(6),
      // eslint-disable-next-line no-confusing-arrow
      password: Yup.string().min(6).when('oldPassword', (oldPassword, field) =>
        // eslint-disable-next-line implicit-arrow-linebreak
        oldPassword ? field.required() : field),
      // eslint-disable-next-line no-confusing-arrow
      confirmPassword: Yup.string().when('password', (password, field) =>
        // eslint-disable-next-line implicit-arrow-linebreak
        password ? field.required().oneOf([Yup.ref('password')]) : field),
    });


    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'validations fails' });
    }

    const { email, oldPassword } = req.body;

    const user = await User.findByPk(req.userId);

    if (email !== user.email) {
      const userExists = await User.findOne({ where: { email } });

      if (userExists) {
        return res.status(400).json({ error: 'User Already Exists' });
      }
    }

    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(401).json({ error: 'Password does not match ' });
    }

    const { id, name, provider } = await user.update(req.body);

    return res.json({
      id,
      name,
      email,
      provider,
    });
  }
}

export default new UserController();
