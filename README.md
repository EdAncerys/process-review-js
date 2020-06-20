Get the Middle Letter(s)

Requirements

The program runs in a REPL like irb or in a browser console.

It's fine to use Ruby or JavaScript.

Your job is to return the middle letter of a word. If the word's length is odd, return the middle letter. If the word's length is even, return the middle 2 letters.

Acceptance Criteria

get_middle("test") # => "es"
get_middle("testing") # => "t"
get_middle("middle") # => "dd"
get_middle("A") # => "A"
get_middle("of") # => "of"

Leap Years

A simple tool that will tell you whether a year is a leap year, according to the following rules:

All years divisible by 400 ARE leap years (e.g. 2000 was a leap year)
All years divisible by 100 but not by 400 are NOT leap years (e.g. 1700, 1800 and 1900 were not leap years)
All years divisible by 4 and not by 100 ARE leap years (e.g. 2004, 2008 and 2012 were leap years)
All years not divisible by 4 are NOT leap years (e.g. 2009, 2010 and 2011 were not leap years)
Example output

2.4.1 :001 > require './lib/leap_years.rb'
=> true
2.4.1 :002 > leap_year?(2000)
=> true
2.4.1 :003 > leap_year?(1970)
=> false
2.4.1 :004 > leap_year?(1900)
=> false
2.4.1 :005 > leap_year?(1988)
=> true
2.4.1 :006 > leap_year?(1500)
=> false
