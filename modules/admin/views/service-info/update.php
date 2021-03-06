<?php

use app\modules\admin\models\Services;
use yii\helpers\Html;

/* @var $this yii\web\View */
/* @var $model app\modules\admin\models\ServiceInfo */

$this->title = 'Обновить доп. инфо: ' . $model->val;
$this->params['breadcrumbs'][] = ['label' => Services::getServiceName($model->service_id), 'url' => ['/admin/services/edit', 'id' => $model->service_id]];
$this->params['breadcrumbs'][] = ['label' => 'Редактирование услуги', 'url' => ['/admin/services/edit', 'id' => $model->service_id]];
$this->params['breadcrumbs'][] = 'Обновить';
?>
<?= $this->render('/layouts/page-bar') ?>
<div class="service-info-update">

<!--    <h1>--><?//= Html::encode($this->title) ?><!--</h1>-->

    <?= $this->render('_form', [
        'model' => $model,
        //'services' => $services,
    ]) ?>

</div>
