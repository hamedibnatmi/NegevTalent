-- insert into dolphin 
-- 			(name, color, height, healthy)
-- 	values	('Daron', 'yellow', 4, true),
-- 			('Roro', 'blue', 1.5, true),
-- 			('Dodo', 'red', 2.5, false),
-- 			('Nono', 'green', 2.1,true);

-- update dolphin 
-- set height = 6
-- where name = 'Daron';

-- select * from dolphin where name like '%on%';

-- delete from dolphin 
-- where height = 2 and color = 'blue';

select name, height from dolphin where healthy = true order by height;