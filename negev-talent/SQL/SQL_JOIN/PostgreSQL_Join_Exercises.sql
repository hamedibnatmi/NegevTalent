-- Exercise 2
select count(disease) from patient;
-- Exercise 3
select count(disease) from patient where disease = 'cabbage disease';
-- Exercise 4
select 
patient.id,
disease.survival_rate 
from patient 
full join disease 
on patient.disease = disease.name
where patient.disease is not null
order by patient.id asc;
-- Exercise 5
select  patient.symptoms_family, count (patient.id) as "count(symptoms_family)" from patient
where disease = 'cabbage disease'
group by symptoms_family
order by symptoms_family asc;
-- Exercise 6
select  ethnicity.name, count(ethnicity.name)
from patient 
join ethnicity
on patient.ethnicity = ethnicity.id
where disease = 'lettuce disease'
group by ethnicity.name;


