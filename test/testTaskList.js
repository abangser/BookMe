describe("Task List", function() {
  it("can add a task", function() {
		var list1 = new task("One");
		var list2 = new task("Two");
		var testTaskList = new taskList();
		testTaskList.addTask(list1);
		expect(testTaskList.contains(list1)).toBeTruthy();
		});
		
	it("holds more than one task", function() {
			var list1 = new task("One");
			var list2 = new task("Two");
			var list15 = new task("Two");
			var testTaskList = new taskList();
			testTaskList.addTask(list1);
			testTaskList.addTask(list2);
			expect(testTaskList.contains(list1)).toBeTruthy();
			expect(testTaskList.contains(list2)).toBeTruthy();
			expect(testTaskList.contains(list15)).toBeFalsy();
		});
		
		describe("with active and completed tasks", function() {
		  it("can return only completed tasks", function() {
		    var list1 = new task("One");
				var list2 = new task("Two", true);
				var testTaskList = new taskList();
				testTaskList.addTask(list1);
				testTaskList.addTask(list2);
				var completedList = testTaskList.completedTasks();
				expect(completedList).toNotContain(list2);
		  });
		});
});