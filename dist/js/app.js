(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var todos = [];

document.querySelector("#todo-button").addEventListener("click", function (e) {
  e.preventDefault();
  var todoInput = document.querySelector("#todo-input");
  console.log(todoInput.value);
  var todo = new Todo(todoInput.value);
  todos.push(todo);
  todoInput.value = "";
  render();
});

function Todo(item) {
  this.item = item;
  this.completed = false;
}

function render() {
  var list = document.querySelector("#toDo");

  var oldTodos = document.querySelectorAll("#toDo li");

  Array.from(oldTodos).forEach(function (todo) {
    todo.removeEventListener("click", function (e) {
      markComplete(todo);
    });
  });

  list.innerHTML = "";

  todos.forEach(function (todo) {
    var li = document.createElement("li");
    li.textContent = todo.item;
    list.appendChild(li);

    // add event listener to the li
    li.addEventListener('click', function (e) {
      markComplete(todo);
    });

    // add a class if the todo is completed
    if (todo.completed) {
      li.classList.add("completed");
    }
  });
}

function markComplete(todo) {
  if (todo.completed) {
    todo.completed = false;
  } else {
    todo.completed = true;
  }
  render();
}

render();

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxJQUFJLFFBQVEsRUFBUjs7QUFFSixTQUFTLGFBQVQsQ0FBdUIsY0FBdkIsRUFDRyxnQkFESCxDQUNvQixPQURwQixFQUM2QixVQUFDLENBQUQsRUFBTztBQUNoQyxJQUFFLGNBQUYsR0FEZ0M7QUFFaEMsTUFBSSxZQUFZLFNBQVMsYUFBVCxDQUF1QixhQUF2QixDQUFaLENBRjRCO0FBR2hDLFVBQVEsR0FBUixDQUFZLFVBQVUsS0FBVixDQUFaLENBSGdDO0FBSWhDLE1BQUksT0FBTyxJQUFJLElBQUosQ0FBUyxVQUFVLEtBQVYsQ0FBaEIsQ0FKNEI7QUFLaEMsUUFBTSxJQUFOLENBQVcsSUFBWCxFQUxnQztBQU1oQyxZQUFVLEtBQVYsR0FBa0IsRUFBbEIsQ0FOZ0M7QUFPaEMsV0FQZ0M7Q0FBUCxDQUQ3Qjs7QUFZQSxTQUFTLElBQVQsQ0FBYyxJQUFkLEVBQW9CO0FBQ2xCLE9BQUssSUFBTCxHQUFZLElBQVosQ0FEa0I7QUFFbEIsT0FBSyxTQUFMLEdBQWlCLEtBQWpCLENBRmtCO0NBQXBCOztBQUtBLFNBQVMsTUFBVCxHQUFrQjtBQUNoQixNQUFJLE9BQU8sU0FBUyxhQUFULENBQXVCLE9BQXZCLENBQVAsQ0FEWTs7QUFHaEIsTUFBSSxXQUFXLFNBQVMsZ0JBQVQsQ0FBMEIsVUFBMUIsQ0FBWCxDQUhZOztBQUtoQixRQUFNLElBQU4sQ0FBVyxRQUFYLEVBQXFCLE9BQXJCLENBQTZCLFVBQUMsSUFBRCxFQUFVO0FBQ3JDLFNBQUssbUJBQUwsQ0FBeUIsT0FBekIsRUFBa0MsVUFBQyxDQUFELEVBQU87QUFDdkMsbUJBQWEsSUFBYixFQUR1QztLQUFQLENBQWxDLENBRHFDO0dBQVYsQ0FBN0IsQ0FMZ0I7O0FBV2hCLE9BQUssU0FBTCxHQUFpQixFQUFqQixDQVhnQjs7QUFjaEIsUUFBTSxPQUFOLENBQWMsVUFBQyxJQUFELEVBQVU7QUFDcEIsUUFBSSxLQUFLLFNBQVMsYUFBVCxDQUF1QixJQUF2QixDQUFMLENBRGdCO0FBRXBCLE9BQUcsV0FBSCxHQUFpQixLQUFLLElBQUwsQ0FGRztBQUdwQixTQUFLLFdBQUwsQ0FBaUIsRUFBakI7OztBQUhvQixNQU1wQixDQUFHLGdCQUFILENBQW9CLE9BQXBCLEVBQTZCLFVBQUMsQ0FBRCxFQUFPO0FBQ2xDLG1CQUFhLElBQWIsRUFEa0M7S0FBUCxDQUE3Qjs7O0FBTm9CLFFBV2hCLEtBQUssU0FBTCxFQUFnQjtBQUNsQixTQUFHLFNBQUgsQ0FBYSxHQUFiLENBQWlCLFdBQWpCLEVBRGtCO0tBQXBCO0dBWFUsQ0FBZCxDQWRnQjtDQUFsQjs7QUFnQ0EsU0FBUyxZQUFULENBQXNCLElBQXRCLEVBQTRCO0FBQzFCLE1BQUksS0FBSyxTQUFMLEVBQWdCO0FBQ2xCLFNBQUssU0FBTCxHQUFpQixLQUFqQixDQURrQjtHQUFwQixNQUVPO0FBQ0wsU0FBSyxTQUFMLEdBQWlCLElBQWpCLENBREs7R0FGUDtBQUtBLFdBTjBCO0NBQTVCOztBQVNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImxldCB0b2RvcyA9IFtdO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG8tYnV0dG9uXCIpXG4gIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IHRvZG9JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kby1pbnB1dFwiKTtcbiAgICBjb25zb2xlLmxvZyh0b2RvSW5wdXQudmFsdWUpO1xuICAgIGxldCB0b2RvID0gbmV3IFRvZG8odG9kb0lucHV0LnZhbHVlKTtcbiAgICB0b2Rvcy5wdXNoKHRvZG8pO1xuICAgIHRvZG9JbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgcmVuZGVyKCk7XG4gIH0pXG5cblxuZnVuY3Rpb24gVG9kbyhpdGVtKSB7XG4gIHRoaXMuaXRlbSA9IGl0ZW07XG4gIHRoaXMuY29tcGxldGVkID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgbGV0IGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvRG9cIik7XG5cbiAgbGV0IG9sZFRvZG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiN0b0RvIGxpXCIpO1xuXG4gIEFycmF5LmZyb20ob2xkVG9kb3MpLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICB0b2RvLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgbWFya0NvbXBsZXRlKHRvZG8pO1xuICAgIH0pXG4gIH0pXG5cbiAgbGlzdC5pbm5lckhUTUwgPSBcIlwiO1xuXG5cbiAgdG9kb3MuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgbGkudGV4dENvbnRlbnQgPSB0b2RvLml0ZW07XG4gICAgICBsaXN0LmFwcGVuZENoaWxkKGxpKTtcblxuICAgICAgLy8gYWRkIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBsaVxuICAgICAgbGkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBtYXJrQ29tcGxldGUodG9kbyk7XG4gICAgICB9KTtcblxuICAgICAgLy8gYWRkIGEgY2xhc3MgaWYgdGhlIHRvZG8gaXMgY29tcGxldGVkXG4gICAgICBpZiAodG9kby5jb21wbGV0ZWQpIHtcbiAgICAgICAgbGkuY2xhc3NMaXN0LmFkZChcImNvbXBsZXRlZFwiKTtcbiAgICAgIH1cbiAgICB9KVxuXG59XG5cbmZ1bmN0aW9uIG1hcmtDb21wbGV0ZSh0b2RvKSB7XG4gIGlmICh0b2RvLmNvbXBsZXRlZCkge1xuICAgIHRvZG8uY29tcGxldGVkID0gZmFsc2U7XG4gIH0gZWxzZSB7XG4gICAgdG9kby5jb21wbGV0ZWQgPSB0cnVlO1xuICB9XG4gIHJlbmRlcigpO1xufVxuXG5yZW5kZXIoKTtcbiJdfQ==
