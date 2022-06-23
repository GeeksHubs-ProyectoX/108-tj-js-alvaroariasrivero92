function toMilliseconds(h,m,s){
  if((h<0 || h>23) || (m<0 || m>59) || (s<0 || s>59)){
    return -1
  }else{
    return h*3600000+m*60000+s*1000
  }
}

module.exports = toMilliseconds;
