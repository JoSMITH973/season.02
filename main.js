const fs = require('fs');

//eventbox .episode_01
    // const eventbox = require('./.episode_01/eventbox');
    // eventbox();

//eventbox .episode_02
    // const eventbox = require('./.episode_02/eventbox');
    // let text = 'Claude, Alan, Danny, Joan';
    // let array = text.split(', ');
    // eventbox(array);

//streambox .episode_03
    // const streambox =  require('./.episode_03/streambox');
    // filename = process.argv[2];
    // streambox(filename);
    
//streambox .episode_04
    const streambox =  require('./.episode_04/streambox');
    filename = process.argv[2];
    streambox(filename);

