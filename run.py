import json
import math
from os import listdir

names = {
  'Caleb' : 'Caleb Mok',
  'Charles' : 'Charles Torpey',
  'Chris' : 'Christopher Pantaleon',
  'Dan' : 'Dan Thompson',
  'Edwin' : 'Edwin Lu',
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
  'Ryan-Ph' :'Ryan Phi-Nguyen',
  'Sakhin' : 'Sakhin Selvamani',
  'Tanner' : 'Tanner Yue',
  'Ted' : 'Tadeas Horn',
  'Vincent' : 'Vincent Cook',
  'X' : 'Xavier Herrera',
}

##########################
# leaderboard processing #
##########################

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
    'D': int(arr[6]),
  }
  processed_data.append(obj)
file.close()

def calculate_rating(obj):
  base_rating = 500
  def win(w):
    res = 114 * math.log2(0.5 * (int(w) + 2))
    return math.floor(res)
  def loss(l):
    res = -93 * math.log2(0.4 * (int(l) + 2.5))
    return math.floor(res)
  def goal(g):
    return math.floor(2 * int(g))
  def assist(a):
    return math.floor(2 * int(a))
  def turn(t):
    return math.floor(-4 * int(t))
  def defense(d):
    return math.floor(2 * int(d))
  
  result = win(obj['W']) + loss(obj['L']) + goal(obj['G']) + assist(obj['A']) + turn(obj['T']) + defense(obj['D'])
  obj['Rating'] = base_rating + result

for i in processed_data:
  calculate_rating(i)

out = open('out.txt', 'w')
out.write(json.dumps(processed_data))
out.close()

print('data processing done!')


################################
#   stats per day processing   #
################################
per_day_files = listdir(".\\per-day")
per_day_data = {}
for filename in per_day_files:
  per_day_data[filename] = []
  file = open(".\\per-day\\{}".format(filename), 'r')
  
  for line in file:
    arr = line.strip().replace('\t', ' ').split(' ')
    obj = {
      'name': names[arr[0]],
      'T': int(arr[1]),
      'A': int(arr[2]),
      'G': int(arr[3]),
      'W': int(arr[4]),
      'L': int(arr[5]),
      'D': int(arr[6]),
    }
    per_day_data[filename].append(obj)
  file.close()

pd_out = open('day.txt', 'w')
pd_out.write(json.dumps(per_day_data))
pd_out.close()

print("per day processing done!")


################################
# aggregate per day processing #
################################
aggregate_files = listdir(".\\aggregate-day")
aggregate_data = {}
for filename in aggregate_files:
  aggregate_data[filename] = []
  file = open(".\\aggregate-day\\{}".format(filename), 'r')
  
  for line in file:
    arr = line.strip().replace('\t', ' ').split(' ')
    obj = {
      'name': names[arr[0]],
      'T': int(arr[1]),
      'A': int(arr[2]),
      'G': int(arr[3]),
      'W': int(arr[4]),
      'L': int(arr[5]),
      'D': int(arr[6]),
    }
    aggregate_data[filename].append(obj)
  file.close()

ad_out = open('aggregate.txt', 'w')
ad_out.write(json.dumps(aggregate_data))
ad_out.close()

print("aggregate processing done!")
