from flask import Blueprint,  request, redirect, render_template, flash, url_for, session

admin = Blueprint('admin', __name__, template_folder='templates', static_folder='static')


def login_admin():
    session['admin_logged'] = 1

# Проверка зашел админ в панель или нет
def isLogged():
    return True if session.get('admin_logged') else False

# Удаление из сессии запись и с помощью этой функции выходим из админ панели
def logout_admin():
    session.pop('admin_logged', None)


menu = [{'url': '.index', 'title': 'Панель'},
        {'url': '.logout', 'title': 'Выйти'}]


# db_admin = None
# @admin.before_request
# def before_request():
# # Установлено соединение с БД перед выполнением запроса
#     global db_admin
#     db_admin = g.get('link_db')
#
# @admin.teardown_request
# def teardown_request(request):
#     global db_admin
#     db_admin = None
#     return request


@admin.route('/')
def index():
    if not isLogged():
        return redirect(url_for('.login'))

    return render_template('admin/index.html', menu=menu, title='Админ-панель')


@admin.route('/login', methods=["POST", "GET"])
def login():
    if isLogged():
        return redirect(url_for('.index'))

    if request.method == "POST":
        if request.form['user'] == "admin" and request.form['psw'] == "12345":
            login_admin()
            return redirect(url_for('.index'))
        else:
            flash("Неверный логин или пароль", "error")

    return render_template('admin/login.html', title='Админ-панель')


@admin.route('/logout', methods=["POST", "GET"])
def logout():
    if not isLogged():
        return redirect(url_for('.login'))
    logout_admin()

    return redirect(url_for('.login'))
