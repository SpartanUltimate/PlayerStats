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
    res = 20 * w
    return math.floor(res)
  def loss(l):
    res = -20 * l
    return math.floor(res)
  def goal(g):
    return math.floor(4 * int(g))
  def assist(a):
    return math.floor(4 * int(a))
  def turn(t):
    return math.floor(-6 * int(t))
  def defense(d):
    return math.floor(4 * int(d))
  
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


################################
#   match history processing   #
################################
mh_files = listdir(".\\history")
mh_data = {}
for filename in mh_files:
  file = open(".\\history\\{}".format(filename), 'r')
  mh_data[filename] = json.loads(file.read())
  file.close()

for date in mh_data:
  for games in mh_data[date]:
    for game in mh_data[date][games]:
      team1 = game["team1"]
      team2 = game["team2"]
      team1_score = 0
      team2_score = 0
      for stats in team1.values():
        team1_score += stats['goals']
      for stats in team2.values():
        team2_score += stats['goals']      
      game["team1_score"] = team1_score
      game["team2_score"] = team2_score

mh_out = open('history.txt', 'w')
mh_out.write(json.dumps(mh_data))
mh_out.close()

print("match history processing done!")
