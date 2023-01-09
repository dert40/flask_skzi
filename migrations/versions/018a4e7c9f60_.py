"""empty message

Revision ID: 018a4e7c9f60
Revises: 2e48afda1692
Create Date: 2022-12-29 15:29:05.196956

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '018a4e7c9f60'
down_revision = '2e48afda1692'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('users', sa.Column('active', sa.Boolean(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('users', 'active')
    # ### end Alembic commands ###
