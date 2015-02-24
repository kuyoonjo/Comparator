sub search() {
  open FOO,"/usr/share/dict/words" or die $!;
  while (<FOO>) {
    print "Found : $_\n" if /a/o;
  }
}

search();