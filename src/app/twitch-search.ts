export interface TwitchSearch {

    '_links': {
        'self':  string;
        'next':  string;
      };
      'featured': Array<
        {
          'image':  string,
          'priority':  number,
          'scheduled': boolean,
          'sponsored': boolean,
          'text':  string,
          'title':  string,
          'stream': {
            '_id':  number,
            'game':  string,
            'viewers': number,
            'video_height': number,
            'average_fps': number,
            'delay': number,
            'created_at':  string,
            'is_playlist': boolean,
            'stream_type':  string,
            'preview': {
              'small':  string,
              'medium':  string,
              'large':  string,
              'template':  string
            },
            'channel': {
              'mature': boolean,
              'partner': boolean,
              'status':  string,
              'broadcaster_language':  string,
              'display_name':  string,
              'game':  string,
              'language':  string,
              '_id': number,
              'name':  string,
              'created_at':  string,
              'updated_at':  string,
              'delay': null,
              'logo':  string,
              'banner': null,
              'video_banner':  string,
              'background': null,
              'profile_banner':  string,
              'profile_banner_background_color':  string,
              'url':  string,
              'views': number,
              'followers': number,
              '_links': {
                'self':  string,
                'follows':  string,
                'commercial':  string,
                'stream_key':  string,
                'chat':  string,
                'features':  string,
                'subscriptions':  string,
                'editors':  string,
                'teams':  string,
                'videos':  string
              }
            },
            '_links': {
              'self':  string
            }
          }
        }
      >;
    }
