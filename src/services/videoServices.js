const Video = require('../models/video.models');


class VideoServices {

  static async create( newVideo ) {
    try {
      const result = await Video.create( newVideo );
      return result;
    } catch (error) {
      throw error;
    }
  };

  static async delete( id ) {
    try {
      const result = await Video.destroy({
        where: { id }
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

};



module.exports = VideoServices;