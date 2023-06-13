import {GetTransactionDetailResponse} from 'core/data/transaction/types';
import React from 'react';
import User from 'src/assets/icons/user';
import {generateTransactionCode} from 'utils/UtilsGenerateTransactionCode';

type TransactionHeaderMoleculesProps = {
	transactionDetail: GetTransactionDetailResponse | undefined;
};

const TransactionHeaderMolecules = ({transactionDetail}: TransactionHeaderMoleculesProps) => {
	return (
		<div className="flex flex-col px-4">
			<section
				key={transactionDetail?.transaction_code}
				className="mt-4 flex items-center justify-between px-5"
			>
				<div className="flex flex-col items-start">
					<p className="text-m-medium text-neutral-60">Transaction ID</p>
					<p className="mt-0.5 text-m-semibold text-neutral-80">
						{generateTransactionCode(transactionDetail?.transaction_code as string)}
					</p>
				</div>
				<div className="flex flex-col items-center">
					<p className="text-m-medium text-neutral-60">Table</p>
					<p className="mt-0.5 text-m-semibold text-neutral-80">
						{transactionDetail?.table_name || '-'}
					</p>
				</div>
				<div className="flex flex-col items-end">
					<p className="text-m-medium text-neutral-60">Total Pax</p>
					<div className="flex items-center gap-1.5">
						<p className="mt-0.5 text-m-semibold text-neutral-80">{transactionDetail?.total_pax}</p>
						<User />
					</div>
				</div>
			</section>
			<div className="mt-6 border border-gray-300/50 border-b" />
		</div>
	);
};

export default TransactionHeaderMolecules;
