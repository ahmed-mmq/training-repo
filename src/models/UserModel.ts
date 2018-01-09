import { model } from 'mongoose';
import { Request, Response, Router } from 'express';
import User from '../schema/User';

export class UserModel {

  public async getAll(): Promise<any> {
      let data = await User.find();
      return data;
  }
  public async getOne(_id: String): Promise<any> {
      let data = await User.findById({ _id });
      return data ;
  }

  public async post(user: any): Promise<any> {
    let data = await user.save();
    return data;
  }

  public async update(_id: String , user: any ): Promise<any> {
    await User.findByIdAndUpdate(_id , user)
    .then(() => {
      return "";
      })
      .catch((error) => {
        return error;
      });
    }

  public async delete(_id: String): Promise<any> {
   await User.findByIdAndRemove(_id)
   .then(() => {
    return "";
    })
    .catch((error) => {
      return "delete failed";
    });
  }
}
