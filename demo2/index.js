function isValid(Str){
	return /^\w+$/.test(Str);
}
str='1234abc_'
document.write(isValid(str));

str2='$1933#'
document.write(isValid(str2));
