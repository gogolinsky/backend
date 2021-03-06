<?php

use yii\helpers\Html;
use yii\widgets\DetailView;

/* @var $this yii\web\View */
/* @var $model app\modules\admin\models\AnswerQuestions */

$this->title = $model->question;
$this->params['breadcrumbs'][] = ['label' => 'Вопросы и ответы', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
\yii\web\YiiAsset::register($this);
?>
<?= $this->render('/layouts/page-bar') ?>
<div class="answer-questions-view">

<!--    <h3>--><?//= Html::encode($this->title) ?><!--</h3>-->
    <?php if (\Yii::$app->session->hasFlash('creatingSuccess')) : ?>
        <div class="alert alert-success alert-dismissible" style="margin-top: 5%;">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span></button>
            <?php echo \Yii::$app->session->getFlash('creatingSuccess'); ?>
        </div>
    <?php endif; ?>
    <p>
        <?= Html::a('Обновить', ['update', 'id' => $model->id], ['class' => 'btn btn-primary']) ?>
        <?= Html::a('Удалить', ['delete', 'id' => $model->id], [
            'class' => 'btn btn-danger',
            'data' => [
                'confirm' => 'Вы уверены, что хотите удалить этот элемент?',
                'method' => 'post',
            ],
        ]) ?>
    </p>
    <div class="card-box">
        <div class="card-head">

        </div>
        <div class="card-body row">
    <?= DetailView::widget([
        'model' => $model,
        'attributes' => [
            'id',
            'service_id',
            'answer',
            'question:ntext',
            'username',
            'phone',
            'type',
            'status',
        ],
    ]) ?>
        </div>
    </div>
</div>

