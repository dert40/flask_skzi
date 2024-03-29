"""empty message

Revision ID: 2bcba43a1674
Revises: 4de3d0236f4a
Create Date: 2022-12-01 16:09:50.748517

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '2bcba43a1674'
down_revision = '4de3d0236f4a'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('prev_num')
    op.add_column('t_log', sa.Column('data_event', sa.DateTime(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('t_log', 'data_event')
    op.create_table('prev_num',
    sa.Column('pref', sa.VARCHAR(length=10), autoincrement=False, nullable=True)
    )
    # ### end Alembic commands ###
