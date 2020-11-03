const fs = require('fs');

//exercice .episode_01
    // const eventbox = require('./.episode_01/eventbox');
    // eventbox();

//exercice .episode_02
    // const eventbox = require('./.episode_02/eventbox');
    // let text = 'Claude, Alan, Danny, Joan';
    // let array = text.split(', ');
    // eventbox(array);

//exercice .episode_03
    // const streambox =  require('./.episode_03/streambox');
    // filename = process.argv[2];
    // streambox(filename);
    
//exercice .episode_04
    // const streambox =  require('./.episode_04/streambox');
    // filename = process.argv[2];
    // const re = /[a-z]/g;
    // const fn = (letter) => letter.toUpperCase();
    // streambox(filename, re, fn, true);
    
//exercice .episode_05
    // const streambox =  require('./.episode_05/streambox');
    // filename = process.argv[2];
    // const re = /[a-z]/g;
    // const fn = (letter) => letter.toUpperCase();
    // streambox(filename, re, fn, false);

//exercice .episode_06
    const streambox =  require('./.episode_06/streambox');
    filename = process.argv[2];
    streambox(filename);
    
//exercice .episode_07
    // const streambox =  require('./.episode_07/WTFIsThisPipe');
    // filename = ('./main.js');
    // streambox(filename);
    