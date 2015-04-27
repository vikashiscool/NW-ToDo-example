var jade = require('jade');
var scope = process.cwd() + '/';
var id = 1;

// Initialization
function initDatabase() {
   var db = new Dexie('todo-list');
   db.version(1).stores({
       tasks: 'id++, value'
   });

   db.open();
   return db;
}

var myDb = initDatabase();

// Refresh content function
function listTasks() {
   $('.js-todo-list').html('');
   myDb.tasks.each(function(e) {
       var template = jade.compileFile(scope + 'task-template.jade');
       $('.js-todo-list').append(template(e));
   });
}

listTasks(); // By default, display existing tasks

$('.js-todo-form').on('submit', function(e) { // On submission
   e.preventDefault();

   var taskField = $(this).find('input[name="task"]');
   var task = taskField.val();

   taskField.val('');

   myDb
       .tasks
       .put({ value: task })
       .then(function() {
           listTasks();
       });
});