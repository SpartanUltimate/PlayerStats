import json
import math

names = {
  'Caleb' : 'Caleb Mok',
  'Charles' : 'Charles Torpey',
  'Chris' : 'Christopher Pantaleon',
  'Dan' : 'Dan Thompson',
  'Isaac' : 'Isaac Thongthap',
  'Jake' : 'Jake Dapiran',
  'Joe' : 'Joseph Faso',
  'Kevin' : 'Kevin Camelin',
  'Krone' : 'Joshua Krone',
  'Lail' : 'Jakob Lail',
  'Linares' : 'Jacob Linares',
  'Mark' : 'Mark Blackburn',
  'Novinsky' : 'Ryan Novinsky',
  'Raf' : 'Rafael Antipuesto',
  'Roman' : 'Roman Leigh',
  'Ryan-Phi' :'Ryan Phi-Nguyen',
  'Sakhin' : 'Sakhin Selvamani',
  'Tanner' : 'Tanner Yue',
  'Ted' : 'Tadeas Horn',
  'Vincent' : 'Vincent Cook',
  'X' : 'Xavier Herrera',
}

processed_data = []

file = open('data.txt', 'r')

for line in file:
  arr = line.strip().replace('\t', ' ').split(' ')
  obj = {
    'name': names[arr[0]],
    'T': int(arr[1]),
    'A': int(arr[2]),
    'G': int(arr[3]),
    'W': int(arr[4]),
    'L': int(arr[5]),
  }
  processed_data.append(obj)
file.close()

def calculate_rating(obj):
  base_rating = 500
  def win(w):
    res = 100 * math.log10(0.5 * (int(w) + 2))
    return math.floor(res)
  def loss(l):
    res = -50 * math.log10(0.5 * (int(l) + 2))
    return math.floor(res)
  def goal(g):
    return math.floor(2 * int(g))
  def assist(a):
    return math.floor(2 * int(a))
  def turn(t):
    return math.floor(-3 * int(t))
  
  result = win(obj['W']) + loss(obj['L']) + goal(obj['G']) + assist(obj['A']) + turn(obj['T'])
  obj['Rating'] = base_rating + result

for i in processed_data:
  calculate_rating(i)

out = open('out.txt', 'w')
out.write(json.dumps(processed_data))
out.close()

print('data processing done!')
print(json.dumps(processed_data))


