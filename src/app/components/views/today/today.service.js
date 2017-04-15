'use strict';

export class TodayService {
    static get __name__() {
        return 'todayService';
    }

    constructor($timeout, $q) {
        'ngInject';
        this.$timeout = $timeout;
        this.$q = $q;

        this.todaysData = {
            overdueTasks: this._getOverdueTasks()
        };
    }

    getTodaysData() {
        let deferred = this.$q.defer();

        this.$timeout(() => deferred.resolve(this.todaysData), 1000);

        return deferred.promise;
    }

    updateOverdueTask(task) {
        let deferred = this.$q.defer();

        this.$timeout(() => {
            //TODO: move to service and add delay (promise)
            let overdueTask = this.todaysData.overdueTasks.find(t => t.id === task.id);
            if (overdueTask) {
                Object.assign(overdueTask, task);
            }

            deferred.resolve(overdueTask);
        }, 1000);

        return deferred.promise;
    }

    _getOverdueTasks() {
        let overdueTasks = [{
            id: 1,
            text: 'Task 1: < Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem vitae quisquam voluptatem commodi, nam, quod rerum nobis tenetur laborum omnis neque optio, ipsam eum, vel cumque unde molestias consectetur magnam.'
        }, {
            id: 2,
            text: 'Task 2: > Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem vitae quisquam voluptatem commodi, nam, quod rerum nobis tenetur laborum omnis neque optio, ipsam eum, vel cumque unde molestias consectetur magnam.'
        }];

        return overdueTasks;
    }
}