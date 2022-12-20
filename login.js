 async login(body:OTP) {
    return new Promise(async (resolve, reject) => {
      try {
        if (body.otp == "1122") {
          this.neo4jService.read(`MATCH (i:Inventary {mobileNumber:'${body.mobileNumber}'}) return i`)
            .then((r) => {
              const data = r.records[0]['_fields'][0].properties;
              const obj = {
                "fullName": data.fullName,
                "mobileNumber": data.mobileNumber,
                "email": data.email,
                "inventoriesId": data.inventoriesId,
                "adharNumber": data.adharNumber,
                "birthdayDate": data.birthdayDate,
                "profileImage": data.profileImage,
                "_id": data._id
              };
              const token = this.jwtService.sign(obj, { expiresIn: '1h' });

              resolve(
                new NpstResp({
                  data: token,
                  status: true,
                  msg: 'Inventary',
                }),
              );
            }).catch((error) => {
              resolve(
                new NpstResp({
                  status: false,
                  msg: 'error ',
                  data: error,
                }),
              );
            })
        } else {
          resolve(
            new NpstResp({
              status: false,
              msg: 'Enter Valid OTP ',
              data: ""
            }),
          );
        }

      } catch (error) {
        resolve(
          new NpstResp({
            status: false,
            msg: 'error encountered',
            data: error,
          }),
        );
      }
    })
  }
