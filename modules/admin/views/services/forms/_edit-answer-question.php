<?php
/**
 * Created by PhpStorm.
 * User: IT_User-144
 * Date: 16.10.2019
 * Time: 12:59
 */

use yii\bootstrap\ActiveForm;
use yii\helpers\ArrayHelper;
use yii\helpers\Html;
?>
<?php if (!empty($answerQuestionsData) && count($answerQuestionsData) > 0): ?>
    <div class="col-lg-12">
        <p>
           <?= Html::button('Добавить', ['class' => 'btn btn-success', 'id' =>'question-form']) ?>
        </p>
    </div>
    <div class="col-lg-12" id="frm-content">
        <div class="table-responsive">
            <table class="table table-striped custom-table table-hover">
                <thead>
                <tr>
                    <th>№</th>
                    <th>Вопрос</th>
                    <th>Ответ</th>
                    <th>Пользователь</th>
                    <th>Телефон</th>
                    <th>Действие</th>
                </tr>
                </thead>
                <tbody>
                <?php $i = 0;
                foreach ($answerQuestionsData as $question): $i++ ?>
                    <tr>
                        <td><?= $i ?></td>
                        <td><?= $question['question'] ?></td>
                        <td><?= $question['answer'] ?></td>
                        <td><?= $question['username'] ?></td>
                        <td><span class="label label-info label-mini"><?= $question['phone'] ?></span>
                        </td>
                        <td>
                           <?php if ($question['status'] == 1): ?>
                               <a class="btn btn-success btn-xs" data-id="<?= $question['id'] ?>"
                                  data-text="<?= $question['status'] ?>" title="Статус" onclick="changeStatus(this)">
                                   <i class="fa fa-check" id="status<?= $question['id'] ?>"></i>
                               </a>
                           <?php else: ?>
                               <a class="btn btn-danger btn-xs" data-id="<?= $question['id'] ?>"
                                  data-text="<?= $question['status'] ?>" title="Статус" onclick="changeStatus(this)">
                                   <i class="fa fa-times" id="status<?= $question['id'] ?>"></i>
                               </a>
                           <?php endif; ?>
                            <a class="btn btn-danger btn-xs"
                               href="/admin/answer-questions/delete?id=<?= $question['id'] ?>" data-confirm="Вы уверены что хотите удалить этот вопрос?">
                                <i class="fa fa-trash-o" title="Удалить"></i>
                            </a>
                            <a class="btn btn-primary btn-xs"
                               href="/admin/answer-questions/update?id=<?= $question['id'] ?>">
                                <i class="fa fa-pencil" id="status<?= $question['id'] ?>" title="Изменить"></i>
                            </a>
                        </td>
                    </tr>
                <?php endforeach; ?>
                </tbody>
            </table>
        </div>
    </div>
<?php else: ?>

    <div class="answer-questions-form">
       <?php $form = ActiveForm::begin(); ?>
        <div class="col-lg-6 ">
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
               <?= $form->field($model, 'question')->textarea(['rows' => 4]) ?>
            </div>
        </div>
        <div class="col-lg-6 ">
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
               <?= $form->field($model, 'answer')->textarea(['maxlength' => true, 'rows' => 4]) ?>
            </div>
        </div>
        <div class="col-lg-6 ">
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
               <?= $form->field($model, 'service_id')
                   ->dropDownList(ArrayHelper::map($services, 'id', 'name'), [
                       'prompt' => 'Выбрать категорию',
                        'style' => 'display: none'
                   ]) ?>
            </div>
        </div>
        <div class="col-lg-6 ">
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
               <?= $form->field($model, 'username')->textInput(['maxlength' => true]) ?>
            </div>
        </div>

        <div class="col-lg-6 ">
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
               <?= $form->field($model, 'phone')->textInput(['maxlength' => true]) ?>
            </div>
        </div>
        <div class="col-lg-6 ">
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
               <?= $form->field($model, 'type')->dropDownList(['1' => 'Общий', '0' => 'Пользовательский']) ?>
            </div>
        </div>
        <div class="col-lg-12 ">
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
               <?= $form->field($model, 'status')->dropDownList(['1' => 'Включен', '0' => 'Отключен']) ?>
            </div>
        </div>
        <div class="col-lg-12  text-center">
           <?= Html::submitButton($model->isNewRecord ? 'Сохранить' : 'Обновить', ['class' => 'mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 m-r-20 btn-pink']) ?>
        </div>
       <?php ActiveForm::end(); ?>
    </div>
<?php endif; ?>
