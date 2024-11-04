<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\Task;
use Illuminate\Http\Request;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware as ControllersMiddleware;
use Illuminate\Support\Facades\Gate;

class TaskController extends Controller implements HasMiddleware
{


    public static function middleware(){
        return [
            new ControllersMiddleware('auth:sanctum',except:['index','show'])
        ];
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // return Task::all();
        // return Task::with('user')->latest()->get();
        return auth()->user()->tasks()->latest()->get();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    //save task in db
    public function store(Request $request)
    {
        $fields = $request->validate([
            'title' => 'required|max:255',
            'description' => 'required|max:255',
            'status' => 'required'
        ]);

        //creating a task by user
        $task = $request->user()->tasks()->create($fields);
        
        return [

            'task' => $task,
            'user' => $task->user

        ];
        
    }

    /**
     * Display the specified resource.
     */
    
     //showing individual post
    public function show(Task $task)
    {
        return [
            'task' => $task
        ];
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Task $task)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Task $task)
    {
        Gate::authorize('modify',$task);
        $fields = $request->validate([
            'title' => 'required|max:255',
            'description' => 'required|max:255',
            'status' => 'required'
        ]);

        $task->update($fields);
        return $task;

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Task $task)
    {
        Gate::authorize('modify',$task);
        $task->delete();

        return ['message' =>  'task deleted successfully'];
    }
}
