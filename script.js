function palindrome(str) {
  var givenString = str.toLowerCase().replace(/\s/g, '').replace(/[^0-9a-z]/gi, '');
  var stringArray = givenString.split('');
  console.log(stringArray);
  var stringJoined = stringArray.join('');
  console.log(stringJoined);
  var stringArrayRev = stringArray.reverse();
  console.log(stringArrayRev);

  var stringRevJoined = stringArrayRev.join('');
  console.log(stringRevJoined);
  if (stringJoined !== stringRevJoined) {
    return false;
  } else {
    return true;
  }
}
