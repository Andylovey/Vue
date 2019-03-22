import Mock from 'mockjs';
import Qs from 'qs';

var obj = {
    "records|1-10": [
      {
        "name|+1": [
          "Hello",
          "Tracy Mcgrady",
          "World"
        ]
      }
    ]
  }

Mock.mock('https://testapi.stwhyun.com/news/getuser','post',function (req) {
    var start = Qs.parse(req.body).start;
    var limit = Qs.parse(req.body).limit;
    return {
        records : {
            name : 'Tracy Mcgrady',
            start : start,
            limit : limit
        }
    }
})