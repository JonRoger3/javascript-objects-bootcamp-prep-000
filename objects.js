var playlist = {'Architects' : "Doomsday", 'BMTH' : "Mantra", 'Pixies' : "Where Is My Mind"};

function updatePlaylist(obj, name, title){
  
  obj[name] = title;
  return obj;
  
}


updatePlaylist(playlist, nirvana, "Poly");


function removeFromPlaylist(obj, name){
  
  delete obj.name;
  return obj;
  
}


removeFromPlayList(playlist, bmth);
