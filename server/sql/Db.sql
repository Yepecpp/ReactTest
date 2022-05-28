use test;
Create table Usuarios(
Id_U int primary key auto_increment,
Username nvarchar(25),
PassW nvarchar(250)
);
Create Table Messages(
Id_M int auto_increment primary key,
SId_U int,
RId_U int,
MText nvarchar(100),
MTime datetime,
constraint Reciver foreign key (RId_U) references Usuarios(Id_U),
constraint Sender foreign key (SId_U) references Usuarios(Id_U)
); 
Insert into Usuarios values (null,'laraaa','5');
Insert into Usuarios values (null,'yepecpp','5');

select Id_U, Username from Usuarios where 
Username = 'Ralex' or
Username = 'yepecpp';
select M.Id_M, US.Username as 'Sender', UR.Username as 'Reciver', M.MText
from Messages M inner join Usuarios US on US.Id_U=M.SId_U 
inner join Usuarios UR on UR.Id_U=M.RId_U; 