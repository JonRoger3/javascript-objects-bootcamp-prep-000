var playlist = {architects : "Doomsday", bmth : "Mantra", pixies : "Where Is My Mind"};

function updatePlaylist(obj, name, title){
  
  obj[name] = title;
  return obj;
  
}


updatePlaylist(playlist, nirvana, "Poly");


function removeFromPlaylist(obj, name){
  
  delete obj.name;
  return obj;
  
}


removeFromPlayList(playlist, nirvana);
