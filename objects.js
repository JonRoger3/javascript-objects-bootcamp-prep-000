var playlist = {'Slowdive' : 'Alison', 'My Bloody Valentine' : 'Sometimes'};

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
