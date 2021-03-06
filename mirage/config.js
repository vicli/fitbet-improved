export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
  */

  this.get('/bets', function() {
    return {
      data: [{
          type:'bets',
          id: 1,
          attributes: {
            goaltype: "wwwwwwwwggg",
            goal: '1000',
            betamount: '10',
            user: 'vli',
            startdate: 'June',
            enddate: 'Aug',
            status: 'incomplete',
            charity: 'wwf'
          }
        }, {
          type:'bets',
          id: 2,
          attributes: {
            goaltype: 'steps',
            goal: '1000',
            betamount: '2',
            user: 'vli',
            startdate: 'June',
            enddate: 'Aug',
            status: 'success',
            charity: 'wwf'
          }
        }, {
          type: 'bets',
          id: 3,
          attributes: {
            goaltype: 'steps',
            goal: '1000',
            betamount: '5',
            user: 'vli',
            startdate: 'June',
            enddate: 'Aug',
            status: 'fail',
            charity: 'wwf'
          }
        }]
    };
  });

  this.get('/user', function() {
    data: [{
      type:'user',
      id:1, 
      attributes: {
        name:'vli'
      }
    }]
  })
}
