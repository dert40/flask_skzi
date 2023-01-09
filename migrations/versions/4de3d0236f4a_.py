"""empty message

Revision ID: 4de3d0236f4a
Revises: 
Create Date: 2022-11-21 12:35:55.925973

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '4de3d0236f4a'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('t_counter',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('counter', sa.Integer(), nullable=True),
    sa.Column('pref', sa.String(length=10), nullable=True),
    sa.Column('div_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['div_id'], ['t_division.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('t_counter')
    # ### end Alembic commands ###
