import csv

def filter_active_course(data) :
	rows = []
	for _, row in data.iterrows() :
		if row[4] != 2599 :
			continue
		rows.append(row)
	with open('reg-condition-active.csv', 'w') as f :
		writer = csv.writer(f)
		writer.writerow(['courseno', 'title_long_en', 'degree_level', 'pre_en', 'year_end', 'open_status'])
		writer.writerows(rows)