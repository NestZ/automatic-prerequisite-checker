import pprint
import collections
import re

def tokenize_and_count(data, split_out_paren) :
	token = []

	for _, row in enumerate(data) :
		condition = str(row[3]).lower()
		condition = split_out_paren(condition, token)
		splited = re.split(';| and | or ', condition)
		splited = [(lambda s : s.strip())(s) for s in splited]
		splited = list(filter(None, splited))
		for s in splited :
			token.append(s)

	counter = collections.Counter(token)

	counter_not_simple = dict((key, counter[key]) for key in dict(counter) if not str(key).isnumeric())

	with open('token.txt', 'w') as output :
		pprint.pprint(dict(counter_not_simple), output)