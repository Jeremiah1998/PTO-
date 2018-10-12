var  ADD = 0;
var  Fed = GROSSPAY*.15;
var State = GROSSPAY*.05;
var FICA = GROSSPAY*.0762;
var NET = GROSSPAY - (Fed + State + FICA + ADD);
document.write(NET);
